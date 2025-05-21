// pages/invoice-paid-success.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import { auth } from '../src/lib/firebase';

export default function InvoicePaidSuccess() {
  const [status, setStatus] = useState('loading');
  const router = useRouter();

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error('Usuário não autenticado');
        const token = await user.getIdToken();
        const res = await fetch(`/api/user/${user.uid}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.setupComplete) {
          setStatus('complete');
        } else {
          setStatus('error');
        }
      } catch (err) {
        console.error(err);
        setStatus('error');
      }
    };
    checkStatus();
  }, []);

  if (status === 'loading') {
    return <p className="text-center mt-10">Verificando pagamento...</p>;
  }

  if (status === 'error') {
    return (
      <div className="text-center mt-10">
        <p>O pagamento foi recebido, mas ainda estamos processando seu cadastro.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => router.reload()}
        >
          Recarregar
        </button>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Cadastro concluído com sucesso! ✅</h1>
      <p className="mb-4">Seu pagamento foi confirmado e sua conta está pronta para uso.</p>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => router.push('/')}
      >
        Ir para o painel
      </button>
    </div>
  );
}
