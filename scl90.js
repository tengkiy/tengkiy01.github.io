// SCL-90 题目数据
const questions = [
    { id: 1, text: "头痛", factor: "躯体化" },
    { id: 2, text: "神经过敏，心中不踏实", factor: "强迫症状" },
    { id: 3, text: "头脑中有不必要的想法或字句盘旋", factor: "强迫症状" },
    { id: 4, text: "头昏或昏倒", factor: "躯体化" },
    { id: 5, text: "对异性的兴趣减退", factor: "人际关系敏感" },
    { id: 6, text: "对旁人责备求全", factor: "人际关系敏感" },
    { id: 7, text: "感到别人能控制您的思想", factor: "偏执" },
    { id: 8, text: "责怪别人制造麻烦", factor: "偏执" },
    { id: 9, text: "忘记性大", factor: "强迫症状" },
    { id: 10, text: "担心自己的衣饰整齐及仪态的端正", factor: "强迫症状" },
    { id: 11, text: "容易烦恼和激动", factor: "敌对" },
    { id: 12, text: "胸痛", factor: "躯体化" },
    { id: 13, text: "害怕空旷的场所或街道", factor: "恐怖" },
    { id: 14, text: "感到自己的精力下降，活动减慢", factor: "抑郁" },
    { id: 15, text: "想结束自己的生命", factor: "抑郁" },
    { id: 16, text: "听到旁人听不到的声音", factor: "精神病性" },
    { id: 17, text: "发抖", factor: "焦虑" },
    { id: 18, text: "感到大多数人都不可信任", factor: "人际关系敏感" },
    { id: 19, text: "胃口不好", factor: "躯体化" },
    { id: 20, text: "容易哭泣", factor: "抑郁" },
    { id: 21, text: "同异性相处时感到害羞不自在", factor: "人际关系敏感" },
    { id: 22, text: "感到受骗，中了圈套或有人想抓您", factor: "偏执" },
    { id: 23, text: "无缘无故地突然感到害怕", factor: "恐怖" },
    { id: 24, text: "自己不能控制地大发脾气", factor: "敌对" },
    { id: 25, text: "怕单独出门", factor: "恐怖" },
    { id: 26, text: "经常责怪自己", factor: "抑郁" },
    { id: 27, text: "腰痛", factor: "躯体化" },
    { id: 28, text: "感到难以完成任务", factor: "强迫症状" },
    { id: 29, text: "感到孤独", factor: "人际关系敏感" },
    { id: 30, text: "感到苦闷", factor: "抑郁" },
    { id: 31, text: "过分担忧", factor: "焦虑" },
    { id: 32, text: "对事物不感兴趣", factor: "抑郁" },
    { id: 33, text: "感到害怕", factor: "恐怖" },
    { id: 34, text: "您的感情容易受到伤害", factor: "人际关系敏感" },
    { id: 35, text: "旁人能知道您的私下想法", factor: "精神病性" },
    { id: 36, text: "感到别人不理解您、不同情您", factor: "人际关系敏感" },
    { id: 37, text: "感到人们对您不友好，不喜欢您", factor: "人际关系敏感" },
    { id: 38, text: "做事必须做得很慢以保证做得正确", factor: "强迫症状" },
    { id: 39, text: "心跳得很厉害", factor: "焦虑" },
    { id: 40, text: "恶心或胃部不舒服", factor: "躯体化" },
    { id: 41, text: "感到比不上他人", factor: "人际关系敏感" },
    { id: 42, text: "肌肉酸痛", factor: "躯体化" },
    { id: 43, text: "感到有人在监视您、谈论您", factor: "偏执" },
    { id: 44, text: "难以入睡", factor: "抑郁" },
    { id: 45, text: "做事必须反复检查", factor: "强迫症状" },
    { id: 46, text: "难以做出决定", factor: "强迫症状" },
    { id: 47, text: "怕乘电车、公共汽车、地铁或火车", factor: "恐怖" },
    { id: 48, text: "呼吸有困难", factor: "焦虑" },
    { id: 49, text: "一阵阵发冷或发热", factor: "躯体化" },
    { id: 50, text: "因为感到害怕而避开某些东西、场合或活动", factor: "恐怖" },
    { id: 51, text: "脑子变空了", factor: "精神病性" },
    { id: 52, text: "身体发麻或刺痛", factor: "躯体化" },
    { id: 53, text: "喉咙有梗塞感", factor: "躯体化" },
    { id: 54, text: "感到前途没有希望", factor: "抑郁" },
    { id: 55, text: "不能集中注意力", factor: "强迫症状" },
    { id: 56, text: "感到身体的某一部分软弱无力", factor: "躯体化" },
    { id: 57, text: "感到紧张或容易紧张", factor: "焦虑" },
    { id: 58, text: "感到手或脚发重", factor: "躯体化" },
    { id: 59, text: "想到死亡的事", factor: "抑郁" },
    { id: 60, text: "吃得太多", factor: "躯体化" },
    { id: 61, text: "当别人看着您或谈论您时感到不自在", factor: "人际关系敏感" },
    { id: 62, text: "有一些不属于您自己的想法", factor: "精神病性" },
    { id: 63, text: "有想打人或伤害他人的冲动", factor: "敌对" },
    { id: 64, text: "醒得太早", factor: "抑郁" },
    { id: 65, text: "必须反复洗手、点数或触摸某些东西", factor: "强迫症状" },
    { id: 66, text: "睡得不稳不深", factor: "抑郁" },
    { id: 67, text: "有想摔坏或破坏东西的冲动", factor: "敌对" },
    { id: 68, text: "有一些别人没有的想法或念头", factor: "精神病性" },
    { id: 69, text: "感到对别人神经过敏", factor: "人际关系敏感" },
    { id: 70, text: "在商店或电影院等人多的地方感到不自在", factor: "恐怖" },
    { id: 71, text: "感到任何事情都很困难", factor: "抑郁" },
    { id: 72, text: "一阵阵恐惧或惊恐", factor: "焦虑" },
    { id: 73, text: "感到在公共场合吃东西很不舒服", factor: "恐怖" },
    { id: 74, text: "经常与人争论", factor: "敌对" },
    { id: 75, text: "单独一人时神经很紧张", factor: "恐怖" },
    { id: 76, text: "别人对您的成绩没有做出恰当的评价", factor: "偏执" },
    { id: 77, text: "即使和别人在一起也感到孤单", factor: "人际关系敏感" },
    { id: 78, text: "感到坐立不安心神不定", factor: "焦虑" },
    { id: 79, text: "感到自己没有什么价值", factor: "抑郁" },
    { id: 80, text: "感到熟悉的东西变成陌生或不像是真的", factor: "精神病性" },
    { id: 81, text: "大叫或摔东西", factor: "敌对" },
    { id: 82, text: "害怕会在公共场合昏倒", factor: "恐怖" },
    { id: 83, text: "感到别人想占您的便宜", factor: "偏执" },
    { id: 84, text: "为一些有关性的想法而很苦恼", factor: "精神病性" },
    { id: 85, text: "您认为应该因为自己的过错而受到惩罚", factor: "偏执" },
    { id: 86, text: "感到要赶快把事情做完", factor: "强迫症状" },
    { id: 87, text: "感到自己的身体有严重问题", factor: "躯体化" },
    { id: 88, text: "从未感到和其他人很亲近", factor: "人际关系敏感" },
    { id: 89, text: "感到自己有罪", factor: "抑郁" },
    { id: 90, text: "感到自己的脑子有毛病", factor: "精神病性" }
];

// 预设授权码（可以修改这些授权码）
const authCodes = [
    "EVAL2024",
    "TEST2024",
    "SCL90001",
    "SCL90002",
    "SCL90003",
    "ASSESS01",
    "ASSESS02",
    "ASSESS03",
    "MENTAL01",
    "MENTAL02"
];

// 用户答案
let answers = {};

// 授权验证
function verifyAuth() {
    const inputCode = document.getElementById('authCode').value.trim().toUpperCase();
    const errorMsg = document.getElementById('authError');
    
    if (!inputCode) {
        errorMsg.textContent = '请输入授权码';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    if (!authCodes.includes(inputCode)) {
        errorMsg.textContent = '授权码无效';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    // 检查今天是否已使用过该授权码
    const today = new Date().toDateString();
    const usedCodes = JSON.parse(localStorage.getItem('usedCodes') || '{}');
    
    if (usedCodes[inputCode] === today) {
        errorMsg.textContent = '该授权码今天已使用过，请明天再试';
        errorMsg.classList.remove('hidden');
        return;
    }
    
    // 记录使用
    usedCodes[inputCode] = today;
    localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
    
    // 显示问卷
    document.getElementById('authSection').classList.add('hidden');
    document.getElementById('questionSection').classList.remove('hidden');
    
    renderQuestions();
}

// 渲染问题
function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <div class="question-text">${q.id}. ${q.text}</div>
            <div class="options">
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="1" onchange="updateAnswer(${q.id}, 1)">
                    <span>没有</span>
                </label>
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="2" onchange="updateAnswer(${q.id}, 2)">
                    <span>很轻</span>
                </label>
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="3" onchange="updateAnswer(${q.id}, 3)">
                    <span>中等</span>
                </label>
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="4" onchange="updateAnswer(${q.id}, 4)">
                    <span>偏重</span>
                </label>
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="5" onchange="updateAnswer(${q.id}, 5)">
                    <span>严重</span>
                </label>
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

// 更新答案
function updateAnswer(questionId, value) {
    answers[questionId] = value;
    
    // 更新进度
    const progress = (Object.keys(answers).length / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = Object.keys(answers).length;
    
    // 高亮选中的选项
    const radio = document.querySelector(`input[name="q${questionId}"][value="${value}"]`);
    if (radio) {
        const labels = radio.closest('.options').querySelectorAll('.option-label');
        labels.forEach(label => label.classList.remove('selected'));
        radio.closest('.option-label').classList.add('selected');
    }
}

// 提交测评
function submitAssessment() {
    if (Object.keys(answers).length < 90) {
        alert('请完成所有题目后再提交');
        return;
    }
    
    calculateResults();
}

// 计算结果
function calculateResults() {
    // 计算总分
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    
    // 计算因子分
    const factors = {
        "躯体化": [],
        "强迫症状": [],
        "人际关系敏感": [],
        "抑郁": [],
        "焦虑": [],
        "敌对": [],
        "恐怖": [],
        "偏执": [],
        "精神病性": []
    };
    
    questions.forEach(q => {
        if (answers[q.id]) {
            factors[q.factor].push(answers[q.id]);
        }
    });
    
    const factorScores = {};
    for (let factor in factors) {
        const scores = factors[factor];
        factorScores[factor] = scores.length > 0 
            ? (scores.reduce((sum, val) => sum + val, 0) / scores.length).toFixed(2)
            : 0;
    }
    
    displayResults(totalScore, factorScores);
}

// 显示结果
function displayResults(totalScore, factorScores) {
    document.getElementById('questionSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
    
    document.getElementById('totalScore').textContent = totalScore;
    
    const factorContainer = document.getElementById('factorScores');
    factorContainer.innerHTML = '';
    
    for (let factor in factorScores) {
        const factorDiv = document.createElement('div');
        factorDiv.className = 'factor-item';
        factorDiv.innerHTML = `
            <div class="factor-name">${factor}</div>
            <div class="factor-score">${factorScores[factor]}</div>
        `;
        factorContainer.appendChild(factorDiv);
    }
    
    // 生成建议
    const suggestions = generateSuggestions(totalScore, factorScores);
    document.getElementById('suggestions').innerHTML = suggestions;
}

// 生成建议
function generateSuggestions(totalScore, factorScores) {
    let html = '';
    
    // 总体评估
    if (totalScore < 160) {
        html += `
            <div class="suggestion" style="background: #d4edda; border-color: #28a745;">
                <h3 style="color: #155724;">总体评估：正常范围</h3>
                <p style="color: #155724;">您的心理健康状况良好，请继续保持积极的生活态度。</p>
            </div>
        `;
    } else if (totalScore < 200) {
        html += `
            <div class="suggestion">
                <h3>总体评估：轻度症状</h3>
                <p>您可能存在一些轻度的心理不适，建议适当调整生活节奏，注意休息和放松。</p>
            </div>
        `;
    } else {
        html += `
            <div class="suggestion" style="background: #f8d7da; border-color: #dc3545;">
                <h3 style="color: #721c24;">总体评估：需要关注</h3>
                <p style="color: #721c24;">您的得分较高，建议咨询专业心理医生进行进一步评估和指导。</p>
            </div>
        `;
    }
    
    // 因子分析
    const highFactors = [];
    for (let factor in factorScores) {
        if (parseFloat(factorScores[factor]) >= 2.5) {
            highFactors.push(factor);
        }
    }
    
    if (highFactors.length > 0) {
        html += `
            <div class="suggestion">
                <h3>重点关注因子</h3>
                <p>以下方面得分较高，建议重点关注：</p>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    ${highFactors.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // 通用建议
    html += `
        <div class="suggestion" style="background: #d1ecf1; border-color: #17a2b8;">
            <h3 style="color: #0c5460;">健康建议</h3>
            <ul style="color: #0c5460; margin-top: 10px; padding-left: 20px; line-height: 1.8;">
                <li>保持规律的作息时间</li>
                <li>适当进行体育锻炼</li>
                <li>与家人朋友保持良好沟通</li>
                <li>学习压力管理技巧</li>
                <li>必要时寻求专业心理咨询</li>
            </ul>
        </div>
    `;
    
    return html;
}

// 清理过期的授权码记录（每次加载时执行）
function cleanupExpiredCodes() {
    const today = new Date().toDateString();
    const usedCodes = JSON.parse(localStorage.getItem('usedCodes') || '{}');
    const cleanedCodes = {};
    
    for (let code in usedCodes) {
        if (usedCodes[code] === today) {
            cleanedCodes[code] = usedCodes[code];
        }
    }
    
    localStorage.setItem('usedCodes', JSON.stringify(cleanedCodes));
}

// 页面加载时清理过期记录
cleanupExpiredCodes();
