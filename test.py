import sys
from selenium import webdriver

# Conectar al contenedor que ya tienes corriendo en el puerto 4444
options = webdriver.ChromeOptions()
driver = webdriver.Remote(command_executor='http://localhost:4444/wd/hub', options=options)

# Ordenar al navegador del contenedor que abra tu juego
if len(sys.argv) == 1:
    if sys.argv[1] == "dev":
        driver.get("http://host.docker.internal:4200")
else:
    driver.get("https://iasrevenge.bytesretro.es")

