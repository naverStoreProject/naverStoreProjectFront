## PM2 라이브러리

pm2는 cmd를 끄더라도 서버(컴퓨터)에서 계속 실행해주는 기능<br>
가상환경을 사용하는 Docker보다 낮은 메모리를 잡아먹기 때문에 유용함<br>

# 사용방법

- start.bat pm2 서버 시작
- stop.bat pm2 서버 중지
- restart.bat pm2 서버 아예 삭제 후 재시작

모두 package.json 의 script 명령어를 기반으로 하기 때문에 본인이 원하는 스크립트는 별도로 추가/수정 혹은 직접 cmd에서 활용 가능<br>
