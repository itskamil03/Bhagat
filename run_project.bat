@echo off
title Bhagat Website Dev Server
cd /d "C:\Users\kamil\Desktop\bhagat_website-main\bhagat_website-main"
echo ===================================================
echo   Starting Bhagat Engineering Works Dev Server...
echo ===================================================
echo.
echo Opening http://localhost:3000 in your browser...
start http://localhost:3000
echo.
echo Running server...
npm run dev
pause
