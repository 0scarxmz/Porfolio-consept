const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #09090b; color: #fff; display: flex; height: 100vh; }
        .sidebar { width: 260px; background: #09090b; border-right: 1px solid #27272a; display: flex; flex-direction: column; padding: 16px; }
        .user { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .user img { width: 32px; height: 32px; border-radius: 50%; }
        .user-info { display: flex; flex-direction: column; }
        .user-name { font-weight: 600; font-size: 14px; }
        .user-workspace { font-size: 12px; color: #a1a1aa; }
        .nav-group { margin-bottom: 24px; }
        .nav-item { display: flex; align-items: center; gap: 12px; padding: 8px 12px; border-radius: 6px; color: #a1a1aa; font-size: 14px; margin-bottom: 4px; }
        .nav-item.active { background: #27272a; color: #fff; }
        .main { flex: 1; display: flex; flex-direction: column; }
        .header { padding: 24px 32px; border-bottom: 1px solid #27272a; font-size: 18px; font-weight: 600; }
        .header span { color: #a1a1aa; font-weight: 400; font-size: 14px; margin-left: 8px; }
        .content { display: flex; flex: 1; padding: 32px; gap: 32px; }
        .tasks { flex: 1; }
        .tasks-header { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; font-weight: 600; }
        .badge { background: #27272a; padding: 2px 8px; border-radius: 12px; font-size: 12px; }
        .task-list { background: #09090b; border: 1px solid #27272a; border-radius: 12px; overflow: hidden; }
        .task-list-header { display: flex; padding: 12px 16px; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 13px; align-items: center; }
        .task-list-header .active-tab { background: #27272a; color: #fff; padding: 4px 12px; border-radius: 6px; margin-left: 12px; }
        .task-item { display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #27272a; gap: 16px; }
        .task-item:last-child { border-bottom: none; }
        .task-checkbox { width: 16px; height: 16px; border: 1px solid #52525b; border-radius: 4px; }
        .task-title { flex: 1; font-size: 14px; display: flex; align-items: center; gap: 8px; }
        .task-title img { width: 20px; height: 20px; border-radius: 50%; }
        .task-date { color: #a1a1aa; font-size: 12px; }
        .right-panel { width: 320px; display: flex; flex-direction: column; gap: 24px; }
        .card { background: #09090b; border: 1px solid #27272a; border-radius: 12px; padding: 16px; }
        .card-header { font-size: 12px; font-weight: 600; color: #a1a1aa; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .chart { height: 150px; border-bottom: 1px dashed #27272a; position: relative; margin-bottom: 16px; }
        .stat-row { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px; color: #a1a1aa; }
        .stat-val { color: #fff; }
        .stat-val.green { color: #10b981; }
      </style>
    </head>
    <body>
      <div class="sidebar">
        <div class="user">
          <div style="width: 32px; height: 32px; background: #ef4444; border-radius: 50%;"></div>
          <div class="user-info">
            <span class="user-name">Sentional's</span>
            <span class="user-workspace">Workspace</span>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-item active">Dashboard</div>
          <div class="nav-item">Studio</div>
          <div class="nav-item">Editor</div>
          <div class="nav-item">Library</div>
          <div class="nav-item">Repurpose</div>
          <div class="nav-item">Analytics</div>
        </div>
        <div class="nav-group">
          <div class="nav-item">Folder Home</div>
          <div class="nav-item">Projects</div>
          <div class="nav-item">Project Exports</div>
          <div class="nav-item">Computer Uploads</div>
        </div>
        <div style="flex: 1;"></div>
        <div class="nav-item">Settings</div>
      </div>
      <div class="main">
        <div class="header">
          Today's Protocol <span>/ Wednesday, Mar 11</span>
        </div>
        <div class="content">
          <div class="tasks">
            <div class="tasks-header">
              Tasks <span class="badge">2</span>
            </div>
            <div class="task-list">
              <div class="task-list-header">
                All <span style="margin-left: 4px; color: #52525b;">2</span>
                <span class="active-tab">Active 2</span>
                <span style="margin-left: 12px;">Done <span style="color: #52525b;">0</span></span>
              </div>
              <div style="padding: 12px 16px; border-bottom: 1px solid #27272a; color: #52525b; font-size: 14px;">
                + Add a new task... (press Enter)
              </div>
              <div style="padding: 8px 16px; border-bottom: 1px solid #27272a; font-size: 11px; font-weight: 600; color: #a1a1aa; letter-spacing: 0.5px;">
                MEDIUM <span style="float: right;">2</span>
              </div>
              <div class="task-item">
                <div class="task-checkbox"></div>
                <div class="task-title">
                  <div style="width: 20px; height: 20px; background: #ef4444; border-radius: 50%;"></div>
                  Create a video using remotion for landing page
                </div>
                <div class="task-date">Feb 18</div>
              </div>
              <div class="task-item">
                <div class="task-checkbox"></div>
                <div class="task-title">
                  <div style="width: 20px; height: 20px; background: #ef4444; border-radius: 50%;"></div>
                  Finish landing page
                </div>
                <div class="task-date">Feb 18</div>
              </div>
            </div>
          </div>
          <div class="right-panel">
            <div style="background: #6366f1; color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; width: fit-content;">
              Youtube Growth
            </div>
            <div class="card">
              <div class="card-header">
                YOUTUBE GROWTH
              </div>
              <div class="chart">
                <div style="position: absolute; bottom: 0; left: 0; width: 100%; border-bottom: 1px dashed #27272a;"></div>
                <div style="position: absolute; bottom: 33%; left: 0; width: 100%; border-bottom: 1px dashed #27272a;"></div>
                <div style="position: absolute; bottom: 66%; left: 0; width: 100%; border-bottom: 1px dashed #27272a;"></div>
                <div style="position: absolute; bottom: 100%; left: 0; width: 100%; border-bottom: 1px dashed #27272a;"></div>
                <div style="position: absolute; top: 20%; left: 50%; width: 6px; height: 6px; background: #6366f1; border-radius: 50%; box-shadow: 0 0 0 2px #09090b, 0 0 0 4px #6366f1;"></div>
              </div>
              <div class="stat-row">
                <span>Followers</span>
                <span class="stat-val green">37</span>
              </div>
              <div class="stat-row">
                <span>Daily Pace</span>
                <span class="stat-val">+0/day</span>
              </div>
            </div>
            <div class="card" style="border: none; padding: 0;">
              <div class="card-header">RECENT ACTIVITY</div>
              <div style="color: #52525b; font-size: 13px; font-style: italic;">No recent activity.</div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;
    
    await page.setContent(html);
    await page.screenshot({ path: 'public/rise-dashboard.png' });
    await browser.close();
    console.log('Screenshot saved to public/rise-dashboard.png');
  } catch (err) {
    console.error(err);
  }
})();
