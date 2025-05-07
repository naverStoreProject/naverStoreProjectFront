@echo off

REM PM2는 전역으로 설치되어있어야함
echo Checking PM2 installation...
where pm2 >nul 2>nul
if %errorlevel% neq 0 (
    echo PM2 is not installed globally. Installing...
    call npm install pm2 --g
)

echo Checking naverCloneProjectFront status...

REM 프로세스 상태 확인
for /f "tokens=*" %%a in ('pm2 list ^| findstr /i "clone-project-front"') do (
    set "status=%%a"
)

REM 프로세스 없으면 말들고 있으면 restart
if defined status (
    echo naverCloneProjectFront is already running. Restarting...
    call npm run pm2:restart
) else (
    echo Starting naverCloneProjectFront...
    call npm run pm2:start
)

echo.
echo Press any key to exit...
pause > nul 