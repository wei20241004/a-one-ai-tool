'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMsg() {
    if (!input) return;
    setLoading(true);
    setReply('AI 思考中...');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setReply(data.choices?.[0]?.message?.content || 'AI 没有返回内容');
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>🤖 我的AI聊天机器人</h1>

      <div style={{
        border: '1px solid #ddd',
        padding: 15,
        borderRadius: 8,
        minHeight: 150,
        marginBottom: 15,
        whiteSpace: 'pre-wrap'
      }}>
        {reply || '💬 请问你想问什么？'}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{
          width: '100%',
          padding: 12,
          fontSize: 16,
          marginBottom: 10,
          borderRadius: 6
        }}
        placeholder="在这里输入你的问题..."
      />

      <button
        onClick={sendMsg}
        disabled={loading}
        style={{
          width: '100%',
          padding: 14,
          fontSize: 16,
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer'
        }}
      >
        {loading ? '⏳ AI 思考中...' : '🚀 发送给 AI'}
      </button>
    </div>
  );
}