# Use the official .NET 10 SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY ["src/middleware/AnyPOS.Api/AnyPOS.Api.csproj", "AnyPOS.Api/"]
COPY ["src/middleware/AnyPOS.Core/AnyPOS.Core.csproj", "AnyPOS.Core/"]
RUN dotnet restore "AnyPOS.Api/AnyPOS.Api.csproj"

# Copy everything else and build
COPY src/middleware .
WORKDIR "/src/AnyPOS.Api"
RUN dotnet publish "AnyPOS.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "AnyPOS.Api.dll"]
