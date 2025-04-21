# 🧠 Documentación de la Lógica de Negocio - esdelcarajo.com

## 🎯 Objetivo del negocio
Vender camisetas/poleras customizadas con estilo rock alternativo a través de una tienda online dirigida a un público entre 18 y 45 años.

---

## 👥 Tipos de usuario

| Tipo de usuario | Descripción | Acceso especial |
|-----------------|-------------|-----------------|
| Cliente         | Persona que explora y compra productos | Registro obligatorio con alias único |
| Admin Ventas    | Dueño (mi primo) que gestiona pedidos y stock | Panel privado |
| Admin Respaldo  | Usuario secundario con mismos permisos | Panel privado |
| Dev Tester      | Usuario técnico para testeo y control | Panel privado |

---

## 🔁 Flujo general del cliente

1. El cliente entra al home (visual llamativa, fuerte identidad de marca).
2. Accede a la tienda (galería de productos).
3. Selecciona un producto y hace clic en “Comprar”.
4. Si no ha iniciado sesión, es redirigido a **registro/login**.
5. Registro:
   - Paso 1: Email + contraseña o Google login.
   - Paso 2: Ingresa alias único (con el que será identificado).
6. Completa compra:
   - Ingresa método de pago (input de texto).
   - Sube imagen del comprobante de pago.
   - Confirma pedido.

---

## 🛒 Flujo de compra sin pasarela de pago (modo Venezuela)

- Los precios están en **USD**.
- El cliente acuerda el **monto en bolívares directamente** con el admin.
- El cliente sube **captura del pago** (transferencia, etc).
- El admin revisa y **confirma o rechaza** el pago.
- Se actualiza el estado del pedido.

---

## 🧩 Reglas clave del negocio

- El alias del cliente debe ser único.
- No se permiten compras anónimas.
- Cada producto tiene stock por talla y color.
- Si un producto se queda sin stock → se marca como inactivo automáticamente.
- El administrador puede:
  - Aplicar **descuentos**
  - Modificar precios
  - Asignar categorías/subcategorías
- Todas las eliminaciones son **soft delete**.

---

## ⚙️ Funciones del administrador

- Ver y gestionar todos los pedidos.
- Confirmar o rechazar pagos manualmente.
- CRUD completo de productos.
- Ver productos inactivos (por falta de stock).
- Ver usuarios eliminados (por baja propia o por admin).
- Ver estadísticas generales:
  - Ventas
  - Pedidos
  - Vistas
- Acceso desde **panel privado en subdominio**: `admin.esdelcarajo.com`.

---

## 📈 Roadmap a futuro

- Integrar pasarelas de pago (MercadoPago, PayPal, etc).
- Envío de correos automáticos (confirmaciones, notificaciones).
- Notificaciones internas (tipo dashboard).
- Sistema de envíos (local e internacional).
- Sistema de puntos o fidelización (largo plazo).

---

