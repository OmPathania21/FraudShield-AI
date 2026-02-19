export const fraudTrend = [
	{ t: '00:00', risk: 42, phishing: 38, spoof: 28 },
	{ t: '04:00', risk: 46, phishing: 44, spoof: 30 },
	{ t: '08:00', risk: 58, phishing: 52, spoof: 41 },
	{ t: '12:00', risk: 67, phishing: 59, spoof: 49 },
	{ t: '16:00', risk: 76, phishing: 70, spoof: 56 },
	{ t: '20:00', risk: 71, phishing: 64, spoof: 53 },
]

export const scanDistribution = [
	{ name: 'Email', value: 32, color: '#DC0000' },
	{ name: 'Web', value: 21, color: '#991010' },
	{ name: 'Attachment', value: 18, color: '#6B0A0A' },
	{ name: 'Credential', value: 16, color: '#420505' },
	{ name: 'Voice', value: 13, color: '#2A0404' },
]

export const threatFeed = [
	'[CRITICAL] AI-phishing sequence detected in mailbox cluster alpha',
	'[HIGH] Domain spoof network rotating certificates every 11 min',
	'[HIGH] Synthetic voice signature anomaly at inbound support line',
	'[MEDIUM] Attachment macro obfuscation pattern detected in ZIP payload',
	'[MEDIUM] Credential leak candidate from browser export artifact',
	'[LOW] Prompt injection probe blocked in sandbox boundary',
]

export const riskHeatmap = [
	{ zone: 'Email Gateway', risk: 84 },
	{ zone: 'Web Intake', risk: 69 },
	{ zone: 'Identity Layer', risk: 77 },
	{ zone: 'File Pipeline', risk: 62 },
	{ zone: 'Voice Channel', risk: 74 },
	{ zone: 'Model Surface', risk: 58 },
]

export const threatMetrics = [
	{ label: 'AI Phishing', score: 84, trend: [42, 51, 58, 64, 73, 84] },
	{ label: 'Website Spoofing', score: 76, trend: [30, 34, 40, 57, 66, 76] },
	{ label: 'Attachments', score: 61, trend: [22, 35, 45, 49, 57, 61] },
	{ label: 'Credential Exposure', score: 72, trend: [26, 38, 43, 58, 65, 72] },
	{ label: 'Deepfake Detection', score: 67, trend: [19, 24, 41, 47, 55, 67] },
	{ label: 'Prompt Injection', score: 53, trend: [16, 23, 27, 33, 46, 53] },
]

export const trendData = fraudTrend.map((item) => ({ t: item.t, risk: item.risk }))
export const distributionData = scanDistribution
export const activityFeed = threatFeed

