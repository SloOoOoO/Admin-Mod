@echo off
echo 	*****************************************************
echo.  
echo 		PS5 - Deploy bloomberg_config.txt
echo.	 
echo 	*****************************************************

echo.
echo.

:BLOOMBERG
call:get_ubisoft_ip MACHINENAME
echo Writing %USERNAME%=%MACHINENAME% to bloomberg_config.txt
echo %USERNAME%=%MACHINENAME%>bloomberg_config.txt

echo.
echo Done!
echo.
GOTO END

:END
exit /b
EXIT

:: Functions

:: Get the current machine Ubisoft network ip v4 address.
:: @param out-ipaddress-varname <string> Name of the variable to output the ip address to.
:get_ubisoft_ip <out-ipaddress-varname>

    setlocal EnableDelayedExpansion

        set HAS_UBISOFT_ORG_SUFFIX=0
        set IPV4_LINE=0

        :: Cycle to through the list of ethernet adapters by using the ipconfig command.
        :: Identify the ones that has a ubisoft.org suffix then get the first one that contains an ip.
        for /F "usebackq tokens=* delims=" %%A in (`ipconfig`) do (
            set CURRENT_LINE=%%A

            rem Check if the first char of the current line is a space.
            rem If it is then its we assume its an adapter data, otherwise we assume its a new adapter section starting
            rem so we reset.
            if "!CURRENT_LINE:~0,1!"==" " (

                rem Check for ubisoft.org suffix.
                echo %%A | find "ubisoft.org" > nul
                if not errorlevel 1 (
                    set HAS_UBISOFT_ORG_SUFFIX=1
                )

                rem Check for IPv4 and keep the line.
                echo %%A | find "IPv4" > nul 
                if not errorlevel 1 (
                    set IPV4_LINE=!CURRENT_LINE!
                )

                rem If we have both ubisoft.org suffix and a ipv4 line then we extract the ip from the data
                rem and we return the value to the caller.
                if [!HAS_UBISOFT_ORG_SUFFIX!]==[1] (
                    if not [!IPV4_LINE!]==[0] (
                        for /f "tokens=2 delims=:" %%f in ('echo !IPV4_LINE!') do set TMP_IP=%%f
                        goto:get_ubisoft_ip_end_loop
                    )
                )

            ) else (
                set HAS_UBISOFT_ORG_SUFFIX=0
                set IPV4_LINE=0
            )

        )

        :: Fallback to old strategy if an ip is not found with the domain name ubisoft.org
        set IS_TRUE=0
        if not [!HAS_UBISOFT_ORG_SUFFIX!]==[1] set IS_TRUE=1
        if [!IPV4_LINE!]==[0] set IS_TRUE=1

        if [!IS_TRUE!]==[1] (
            for /f "tokens=2 delims=:" %%f in ('ipconfig ^| find /i "IPv4"') do set TMP_IP=%%f
        )

        :get_ubisoft_ip_end_loop
        for /f "tokens=1*" %%b in ("!TMP_IP!") do set TRIM_IP=%%b

    endlocal & set %1=%TRIM_IP%

goto:eof