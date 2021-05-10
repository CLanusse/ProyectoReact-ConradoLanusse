# Proyecto E-Commerce en react de Conrado Lanusse


Este proyecto simula un ecommerce de una tienda de licores y bebidas. Salvo por la sección de bienvenida, el resto de las páginas es exclusivamente para vista y selección de productos.

## Navegación

La barra de navegación ofrece links a las distintas categorías de productos. En cualquier selección se renderiza el componente ItemListContainer, que muestra productos distintos según un filtro de la base de datos. Cada producto es un componente Item.
La categoría a filtrar se toma usando useParams().

Ingresar manualmente las url permite acceder a las distintas secciones del sitio (/category/catalogo, /cart, /checkout, etc.). Ingresar una url no reconocida renderiza el index para evitar errores.

## Item - ItemDetail

Cada componente Item ofrece la opción de VER MÁS lo que redirecciona al ItemDetail, que muestra un detalle del producto y la opción para agregar al carrito. Esto renderiza el componente ItemDetailContainer, que toma el ID del producto correspondiente usando useParams(), y hace un pedido a la base de datos de ese id. Con el resultado renderiza el componente ItemDetail que muestra el detalle del producto y la opción de agregar al carrito, ajustando la cantidad al stock disponible según la base de datos.

## Cart

Cuando haya al menos un producto agregado al carrito se hace visible en el NavComponent el ícono para ir al carrito, que muestra minimizadamente la cantidad de productos agregados y el precio total al hacer hover sobre el ícono. Clickearlo (o clickear el botón TERMINAR COMPRA en el ItemDetail) redirecciona a /cart, lo que renderiza el componente Cart con el detalle de los productos seleccionados hasta el momento, la posibilidad de eliminar alguno y de continuar con la confirmación de la compra.

## Cart Context

Todos los procesos mencionados anteriormente están atravesados por el contexto CartContext, que reune la información del carrito, los productos seleccionados, y ofrece métodos para limpiar el carrito, calcular el total y agregar productos.

## Firebase

Todos los productos mostrados están cargados en Firebase-Firestore. Cada objeto tiene la siguientes propiedades:
Nombre, categoría, precio, imagen, descripcion, stock; más el ID proporcionado por Firestore.
En la carpeta firebase se encuentra client.js que vincula el proyecto con Firebase y exporta las funciones necesarias para comunicarse con éste.
En esta carpeta se encuentran también exportadas las funciones getProducts(), getItem(), generarOrden()

### getProducts

Hace un llamado a Firebase y retorna un array con todos los productos de la base de datos filtrados por categoría, la cual se toma de useParams() en el ItemListCointainer. Este componente es el que utiliza esta función.

### getItem

Llama a Firebase y retorna un item en particular según su ID. Se utiliza en ItemDetailCointainer para obtener la información del item a mostrar.

### generarOrden

Toma la información del cart y los datos del comprador y genera una nueva orden de compra que se sube a Firebase. Genera verificaciones de stock antes de confirmar la orden. La función retorna una promesa que, si se cumplen las verificaciones previas, retorna el ID de la orden generada y subida a Firebase; de lo contrario retorna un Array con todos los productos que no tienen stock, para que el usuario pueda corregir su compra.

## CHECKOUT

Finalizar compra en el carrito redirecciona a '/checkout' y renderiza el componente Checkout.
Este es un componente grande y complejo, que se va renderizando según varias condiciones.
Primero pide los datos del comprador para poder continuar con la compra. Tiene funciones para manipular el formulario y para hacer una verificación de los datos ingresados. En caso de que haya campos vacíos o inválidos se muestra un mensaje de error antes de continuar.
Verificado los datos se renderiza CheckoutDetail, que muestra los datos del usuario y un detalle más reducido de los items del carrito. Confirmar ejecuta la función generarOrden() con esta información.
Dependiendo de la respuesta se renderizan dos componentes distintos:
    Si la respuesta es un string, o sea el ID de la orden generada, se renderiza CheckoutSuccess que muestra el número de orden generado más un mensaje de éxito, limpia el carrito y ofrece un botón para volver al inicio.
    Si la respuesta es un array, o sea el arreglo con produtos sin stock, no se envía la orden y se renderiza CheckoutOutOfStock, que muestra una lista de los productos sin stock, la cantidad disponible real y un botón para volver al carrito y corregir la compra, para luego repetir el proceso anterior.

Es posible acceder a este componente escribiendo manualmente la url /checkout. Esto permitiría ingresar datos de comprador y generar una orden sin items, con un array carrito vacío. Para evitar este error, el programa revisa que haya items en el carrito antes de continuar con el proceso. Si el cart está vacío no se ejecuta generarOrden().


