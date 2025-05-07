@echo off

REM 뭔가 꼬였을때 아예 삭제하고 다시 만들어서 시작함

echo Checking naverCloneProjectFront...

REM PM2는 전역으로 설치되어있어야함
echo Checking PM2 installation...
where pm2 >nul 2>nul
if %errorlevel% neq 0 (
    echo PM2 is not installed globally. Installing...
    call npm install pm2 --g
)

REM 프로세스 상태 확인
for /f "tokens=*" %%a in ('pm2 list ^| findstr /i "clone-project-front"') do (
    set "status=%%a"
)

REM 프로세스 없으면 말들고 있으면 restart
if defined status (
    echo naverCloneProjectFront is already running. Deleting existing project...
    call npm run pm2:delete
) else (
    echo naverCloneProjectFront not found
)

echo Restarting naverCloneProjectFront...
call npm run pm2:start
echo.
echo Press any key to exit...
pause > nul 
