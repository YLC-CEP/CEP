import React from 'react';

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f9ff',
      color: '#1a2e49',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '3em' }}>🎯 CEP</h1>
      <p>一个由学生发起的 AI 协作任务平台</p>
      <p style={{ marginTop: '2em' }}>🚀 Powered by Claude 3.7 · GPT-4 · Chemistry · Engineering · Physics</p>
    </div>
  );
}
