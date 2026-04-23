(async () => {
    const validUntilStr = atob('MjAyNi0wNS0xNiAyMzo1OTo1OQ==');
    const VALID_UNTIL = new Date(validUntilStr);
    const checkValidity = () => {
        const now = new Date();
        if (now > VALID_UNTIL) {
            alert('❌ 脚本已过期，请联系管理员获取新版本！');
            throw new Error('脚本已过期');
        }
        console.log(`✅ 脚本验证通过，有效期至：${VALID_UNTIL.toLocaleString()}`);
    };

    try {
        checkValidity();
    } catch (e) {
        console.error(e);
        return;
    }

    // ========== 配置 ==========
    const START_INDEX = 0;
    let STEP_DELAY = 2000;
    let TARGET_PERSON_INDEX = 2;
    // ==========================

    // 全局控制
    let isPaused = false;
    let isStopped = false;
    let isCollapsed = false; // 折叠状态

    // 创建控制面板
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.top = '10px';
    panel.style.left = '10px';
    panel.style.zIndex = '9999';
    panel.style.background = '#fff';
    panel.style.border = '1px solid #ccc';
    panel.style.borderRadius = '8px';
    panel.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    panel.style.overflow = 'hidden';

    // 面板头部（左上角：关闭 + 折叠/放大）
    const panelHeader = document.createElement('div');
    panelHeader.style.display = 'flex';
    panelHeader.style.justifyContent = 'space-between';
    panelHeader.style.alignItems = 'center';
    panelHeader.style.padding = '6px 10px';
    panelHeader.style.background = '#f7f8fa';
    panelHeader.style.borderBottom = '1px solid #e4e7ed';
    panelHeader.style.cursor = 'move';

    // 左侧按钮组：关闭 + 折叠
    const headerLeft = document.createElement('div');
    headerLeft.style.display = 'flex';
    headerLeft.style.gap = '6px';

    // 关闭按钮 ×
    const btnClose = document.createElement('button');
    btnClose.textContent = '×';
    btnClose.style.width = '20px';
    btnClose.style.height = '20px';
    btnClose.style.border = 'none';
    btnClose.style.borderRadius = '4px';
    btnClose.style.background = '#fef0f0';
    btnClose.style.color = '#f56c6c';
    btnClose.style.cursor = 'pointer';
    btnClose.style.fontSize = '12px';
    btnClose.style.display = 'flex';
    btnClose.style.alignItems = 'center';
    btnClose.style.justifyContent = 'center';
    btnClose.onmouseover = () => btnClose.style.background = '#fde2e2';
    btnClose.onmouseout = () => btnClose.style.background = '#fef0f0';
    btnClose.onclick = () => document.body.removeChild(panel);

    // 折叠/放大按钮
    const btnCollapse = document.createElement('button');
    btnCollapse.textContent = '−';
    btnCollapse.style.width = '20px';
    btnCollapse.style.height = '20px';
    btnCollapse.style.border = 'none';
    btnCollapse.style.borderRadius = '4px';
    btnCollapse.style.background = '#e1f3ff';
    btnCollapse.style.color = '#409eff';
    btnCollapse.style.cursor = 'pointer';
    btnCollapse.style.fontSize = '12px';
    btnCollapse.style.display = 'flex';
    btnCollapse.style.alignItems = 'center';
    btnCollapse.style.justifyContent = 'center';
    btnCollapse.onmouseover = () => btnCollapse.style.background = '#c6e2ff';
    btnCollapse.onmouseout = () => btnCollapse.style.background = '#e1f3ff';
    btnCollapse.onclick = () => {
        isCollapsed = !isCollapsed;
        btnCollapse.textContent = isCollapsed ? '+' : '−';
        panelContent.style.display = isCollapsed ? 'none' : 'block';
    };

    headerLeft.append(btnClose, btnCollapse);
    panelHeader.appendChild(headerLeft);
    panel.appendChild(panelHeader);

    // 面板内容区域
    const panelContent = document.createElement('div');
    panelContent.style.padding = '10px';
    panelContent.style.display = 'block';

    // 速度控制按钮组（美化版）
    const speedDiv = document.createElement('div');
    speedDiv.style.display = 'flex';
    speedDiv.style.alignItems = 'center';
    speedDiv.style.gap = '6px';
    speedDiv.style.marginBottom = '8px';
    speedDiv.style.padding = '6px 10px';
    speedDiv.style.background = '#f7f8fa';
    speedDiv.style.borderRadius = '8px';
    speedDiv.style.border = '1px solid #e4e7ed';
    speedDiv.innerHTML = `
        <span style="font-size:12px; color:#303133; font-weight:500; min-width:36px;">速度：</span>
        <button id="speed-fast" style="padding:4px 10px; border:none; border-radius:6px; background:#e1f3ff; color:#409eff; cursor:pointer; font-size:12px;">快速(1s)</button>
        <button id="speed-normal" style="padding:4px 10px; border:none; border-radius:6px; background:#e1f3ff; color:#409eff; cursor:pointer; font-size:12px;">默认(2s)</button>
        <button id="speed-slow" style="padding:4px 10px; border:none; border-radius:6px; background:#e1f3ff; color:#409eff; cursor:pointer; font-size:12px;">慢速(3s)</button>
        <button id="speed-custom" style="padding:4px 10px; border:none; border-radius:6px; background:#e1f3ff; color:#409eff; cursor:pointer; font-size:12px;">自定义</button>
        <input type="number" id="custom-delay" placeholder="毫秒" style="width:80px; padding:4px 8px; border:1px solid #dcdfe6; border-radius:6px; outline:none; font-size:12px;" value="${STEP_DELAY}">
    `;

    // 速度按钮hover
    const speedButtons = speedDiv.querySelectorAll('button');
    speedButtons.forEach(btn => {
        btn.onmouseover = () => btn.style.background = '#c6e2ff';
        btn.onmouseout = () => btn.style.background = '#e1f3ff';
    });

    // 本人选项（强制两行）
    const personIndexDiv = document.createElement('div');
    personIndexDiv.style.width = '100%';
    personIndexDiv.style.marginBottom = '8px';
    personIndexDiv.style.padding = '6px 10px';
    personIndexDiv.style.background = '#f7f8fa';
    personIndexDiv.style.borderRadius = '8px';
    personIndexDiv.style.border = '1px solid #e4e7ed';
    personIndexDiv.innerHTML = `
        <div style="font-size:12px; color:#303133; font-weight:500; margin-bottom:4px;">选中第几个"本人"选项：</div>
        <div style="display:flex; align-items:center; gap:6px;">
            <input type="number" id="person-index" placeholder="数字" style="width:80px; padding:4px 8px; border:1px solid #dcdfe6; border-radius:6px; outline:none; font-size:12px;" value="${TARGET_PERSON_INDEX}">
            <button id="set-person-index" style="padding:4px 10px; border:none; border-radius:6px; background:#e1f3ff; color:#409eff; cursor:pointer; font-size:12px;">确认</button>
        </div>
    `;

    // 本人按钮hover
    const personBtn = personIndexDiv.querySelector('#set-person-index');
    personBtn.onmouseover = () => personBtn.style.background = '#c6e2ff';
    personBtn.onmouseout = () => personBtn.style.background = '#e1f3ff';

    // 控制按钮
    const btnPause = document.createElement('button');
    btnPause.textContent = '暂停';
    btnPause.style.padding = '4px 12px';
    btnPause.style.border = 'none';
    btnPause.style.borderRadius = '6px';
    btnPause.style.background = '#f5f5f5';
    btnPause.style.color = '#606266';
    btnPause.style.cursor = 'pointer';
    btnPause.style.fontSize = '12px';
    btnPause.onmouseover = () => btnPause.style.background = '#e9e9e9';
    btnPause.onmouseout = () => btnPause.style.background = '#f5f5f5';

    const btnResume = document.createElement('button');
    btnResume.textContent = '继续';
    btnResume.style.padding = '4px 12px';
    btnResume.style.border = 'none';
    btnResume.style.borderRadius = '6px';
    btnResume.style.background = '#f5f5f5';
    btnResume.style.color = '#606266';
    btnResume.style.cursor = 'pointer';
    btnResume.style.fontSize = '12px';
    btnResume.onmouseover = () => btnResume.style.background = '#e9e9e9';
    btnResume.onmouseout = () => btnResume.style.background = '#f5f5f5';

    const btnStop = document.createElement('button');
    btnStop.textContent = '停止';
    btnStop.style.padding = '4px 12px';
    btnStop.style.border = 'none';
    btnStop.style.borderRadius = '6px';
    btnStop.style.background = '#fef0f0';
    btnStop.style.color = '#f56c6c';
    btnStop.style.cursor = 'pointer';
    btnStop.style.fontSize = '12px';
    btnStop.onmouseover = () => btnStop.style.background = '#fde2e2';
    btnStop.onmouseout = () => btnStop.style.background = '#fef0f0';

    const btnSelectFile = document.createElement('button');
    btnSelectFile.textContent = '选择文件';
    btnSelectFile.style.padding = '4px 12px';
    btnSelectFile.style.border = 'none';
    btnSelectFile.style.borderRadius = '6px';
    btnSelectFile.style.background = '#409EFF';
    btnSelectFile.style.color = 'white';
    btnSelectFile.style.cursor = 'pointer';
    btnSelectFile.style.fontSize = '12px';
    btnSelectFile.onmouseover = () => btnSelectFile.style.background = '#66b1ff';
    btnSelectFile.onmouseout = () => btnSelectFile.style.background = '#409EFF';

    // 组装内容区
    panelContent.appendChild(speedDiv);
    panelContent.appendChild(personIndexDiv);
    const btnWrap = document.createElement('div');
    btnWrap.style.display = 'flex';
    btnWrap.style.gap = '6px';
    btnWrap.style.flexWrap = 'wrap';
    btnWrap.append(btnPause, btnResume, btnStop, btnSelectFile);
    panelContent.appendChild(btnWrap);
    panel.appendChild(panelContent);
    document.body.appendChild(panel);

    // 速度事件
    document.getElementById('speed-fast').addEventListener('click', () => {
        STEP_DELAY = 1000;
        document.getElementById('custom-delay').value = 1000;
        console.log(`✅ 速度已设为快速，间隔：${STEP_DELAY}ms`);
    });
    document.getElementById('speed-normal').addEventListener('click', () => {
        STEP_DELAY = 2000;
        document.getElementById('custom-delay').value = 2000;
        console.log(`✅ 速度已设为默认，间隔：${STEP_DELAY}ms`);
    });
    document.getElementById('speed-slow').addEventListener('click', () => {
        STEP_DELAY = 3000;
        document.getElementById('custom-delay').value = 3000;
        console.log(`✅ 速度已设为慢速，间隔：${STEP_DELAY}ms`);
    });
    document.getElementById('speed-custom').addEventListener('click', () => {
        const customValue = parseInt(document.getElementById('custom-delay').value);
        if (!isNaN(customValue) && customValue >= 100) {
            STEP_DELAY = customValue;
            console.log(`✅ 速度已设为自定义，间隔：${STEP_DELAY}ms`);
        } else {
            alert('请输入有效的数值（≥100毫秒）');
        }
    });

    // 本人选项事件
    document.getElementById('set-person-index').addEventListener('click', () => {
        const customValue = parseInt(document.getElementById('person-index').value);
        if (!isNaN(customValue) && customValue >= 1) {
            TARGET_PERSON_INDEX = customValue;
            console.log(`✅ 已设置选中第 ${TARGET_PERSON_INDEX} 个以"本人"开头的选项`);
        } else {
            alert('请输入有效的数值（≥1）');
        }
    });

    // 控制按钮事件
    btnPause.onclick = () => { isPaused = true; console.log('✅ 已暂停'); };
    btnResume.onclick = () => { isPaused = false; console.log('✅ 继续执行'); };
    btnStop.onclick = () => { isStopped = true; isPaused = false; console.log('🛑 已停止全部任务'); };

    // 等待函数
    function sleep(ms) {
        return new Promise(async (resolve) => {
            const total = ms;
            let step = 100;
            let passed = 0;
            while (passed < total) {
                await new Promise(r => setTimeout(r, step));
                while (isPaused) await new Promise(r => setTimeout(r, 100));
                if (isStopped) return resolve(false);
                passed += step;
            }
            resolve(true);
        });
    }

    // 文件选择
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.style.display = 'none';
    input.onchange = async (e) => {
        try {
            const text = await e.target.files[0].text();
            const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
            const list = lines.slice(START_INDEX);
            for (let i = 0; i < list.length; i++) {
                if (isStopped) break;
                const item = list[i];
                const lineNum = START_INDEX + i;
                console.log(`\n===== 处理第 ${lineNum} 行：${item} =====`);
                try {
                    await runSteps(item);
                    console.log(`✅ 第 ${lineNum} 行完成`);
                } catch (err) {
                    console.error(`❌ 第 ${lineNum} 行出错，跳过：`, err);
                }
            }
            if (!isStopped) console.log('\n🎉 全部处理完毕！');
        } catch (err) {
            console.error('读取文件失败：', err);
        }
    };
    btnSelectFile.onclick = () => input.click();

    // 执行步骤
    async function runSteps(item) {
        const steps = [
            (i) => {
                const el = document.getElementsByClassName('el-input el-input--small el-input--suffix')[0];
                if (el) {
                    const inner = el.getElementsByClassName('el-input__inner')[0];
                    if (inner) { inner.value = i; inner.dispatchEvent(new Event('input', { bubbles: true })); console.log('换数据'); }
                }
            },
            (i) => {
                const btn = document.getElementsByClassName('el-button el-button--primary el-button--mini')[3];
                if (btn) { btn.click(); console.log('点查找'); }
            },
            (i) => {
                const btn = document.getElementsByClassName('el-button el-tooltip item el-button--primary el-button--mini is-circle')[1];
                if (btn) { btn.click(); console.log('点眼睛'); }
            },
            (i) => {
                const btns = Array.from(document.querySelectorAll('button, [type="button"], [type="submit"]')).filter(btn => btn.textContent.trim() === '发送短信');
                if (btns.length > 1) { btns[btns.length - 2].click(); console.log('点发短信'); }
            },
            (i) => {
                const dialogBody = document.getElementsByClassName('el-dialog__body')[0];
                if (dialogBody) {
                    const innerInput = dialogBody.getElementsByClassName('el-input__inner')[0];
                    if (innerInput) { innerInput.click(); console.log('选号码'); }
                }
            },
            (i) => {
                const lists = document.getElementsByClassName('el-scrollbar__view el-select-dropdown__list');
                if (lists.length > 0) {
                    const lastList = lists[lists.length - 1];
                    const items = Array.from(lastList.getElementsByClassName('el-select-dropdown__item'));
                    const personItems = items.filter(li => li.textContent.trim().startsWith('本人'));
                    if (personItems.length === 0) { console.log('⚠️ 未找到以"本人"开头的选项'); return; }
                    const targetIdx = TARGET_PERSON_INDEX - 1;
                    const selectIdx = targetIdx < personItems.length ? targetIdx : 0;
                    personItems[selectIdx].click();
                    console.log(`✅ 选中第 ${selectIdx + 1} 个"本人"选项`);
                }
            },
            (i) => {
                const btn = document.getElementsByClassName('el-button el-button--primary el-button--small is-plain')[0];
                if (btn) { btn.click(); console.log('发送'); }
            },
            (i) => {
                const btn = document.getElementsByClassName('el-icon-close close')[0];
                if (btn) { btn.click(); console.log('叉掉'); }
            }
        ];
        for (let s = 0; s < steps.length; s++) {
            if (isStopped) break;
            const ok = await sleep(STEP_DELAY);
            if (!ok) break;
            console.log(`→ 步骤 ${s+1}`);
            if (typeof steps[s] === 'function') await steps[s](item);
        }
    }

    console.log('脚本初始化完成，点击"选择文件"开始执行');
})();
