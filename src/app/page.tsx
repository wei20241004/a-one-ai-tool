'use client';
import { useState } from 'react';
import useLanguage from '../hooks/useLanguage';

export default function Home() {
  const { lang, t, changeLang } = useLanguage();
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMsg() {
    if (!input) return;
    setLoading(true);
    setReply(t.thinking);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setReply(data.choices?.[0]?.message?.content || t.error);
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'right', marginBottom: 10 }}>
        <button
          onClick={() => changeLang(lang === 'en' ? 'zh' : 'en')}
          style={{
            padding: '6px 12px',
            border: '1px solid #1476ff',
            backgroundColor: '#fff',
            color: '#1476ff',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          {lang === 'en' ? t.switchToChinese : t.switchToEnglish}
        </button>
      </div>

      <h1 style={{ textAlign: 'center', color: '#1476ff' }}>{t.title}</h1>

      <div style={{
        height: '400px',
        border: '1px solid #eee',
        borderRadius: '10px',
        padding: '20px',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9',
        marginBottom: '15px'
      }}>
        {reply || t.start}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          placeholder={t.placeholder}
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '14px'
          }}
        />
        <button
          onClick={sendMsg}
          disabled={loading}
          style={{
            padding: '0 20px',
            backgroundColor: '#1476ff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          {loading ? t.sending : t.send}
        </button>
      </div>
    </div>
  );
}