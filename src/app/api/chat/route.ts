import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // 调用 DeepSeek API
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-b1d6a3baa0a44842a8323f336de9c0fe' // 这里换成你的 DeepSeek API Key
      },
      body: JSON.stringify({
        model: 'deepseek-chat', // DeepSeek 的模型名
        messages: [
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        stream: false
      })
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: '请求失败' }, { status: 500 });
  }
}