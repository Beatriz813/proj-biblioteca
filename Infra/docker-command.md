docker run --name sql-server-biblioteca -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=adminWEB123#" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
