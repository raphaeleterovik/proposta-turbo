import { supabase } from '../../utils/supabase';

// Lembre-se de desabilitar o body-parser para esta rota no Next.js!
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send('Método não permitido');
    }
    
    // ** Em produção, o código de verificação de assinatura do Stripe é crucial aqui. **

    const event = req.body;

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            const userId = session.metadata.user_id; 
            
            await supabase
                .from('assinaturas')
                .upsert({ user_id: userId, status: 'ativa', stripe_customer_id: session.customer, plano: 'Pro' });
                
            break;
            
        case 'customer.subscription.deleted':
            const subscription = event.data.object;
            const customerId = subscription.customer;

            await supabase
                .from('assinaturas')
                .update({ status: 'cancelada' })
                .eq('stripe_customer_id', customerId);
            break;
        
        default:
            console.log(`Evento Stripe não tratado: ${event.type}`);
    }

    res.status(200).json({ received: true });
}
