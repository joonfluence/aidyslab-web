import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log('수신된 데이터:', { name, email, message }); // 1. 요청 데이터 확인

    const headers = {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    };

    const NOTION_DB_ID = process.env.NEXT_PUBLIC_NOTION_DB_ID?.replace(/-/g, '');
    console.log('Notion API 호출 시작', NOTION_DB_ID); // 2. API 호출 전 로그
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties: {
          name: { title: [{ text: { content: name } }] },
          email: { rich_text: [{ text: { content: email } }] },
          message: { rich_text: [{ text: { content: message } }] },
        },
      }),
    });

    const responseData = await response.json(); // 3. API 응답 데이터 확인
    console.log('Notion API 응답:', responseData);

    if (!response.ok) {
      console.error('Notion API 호출 실패:', responseData);
      throw new Error('Notion API 호출 실패');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API 에러:', error);
    return NextResponse.json(
      { error: '데이터 저장에 실패했습니다.' },
      { status: 500 }
    );
  }
}