export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(200).json({ 
            text: "💡 [안내] Vercel 환경변수(GEMINI_API_KEY)가 설정되어 있지 않아 기본 샘플 인사이트 보고서를 출력합니다.\n\n• 수도권 및 남부권역 간 인구/출산율 상호 연관성 분석 완료\n• 주요 지자체별 경제지표(GRDP)와 주택보급률 간 양의 상관관계 확인" 
        });
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "AI 분석 결과를 불러올 수 없습니다.";
        return res.status(200).json({ text });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
