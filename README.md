# my-phone-input-global

Un componente React reutilizable para ingresar **teléfonos con selección de país**, mostrando **bandera**, **prefijo** y con **soporte completo de estilos personalizables**.  

Ideal para empaquetar y usar en cualquier proyecto React.

---

## 📦 Instalación

```bash
npm install my-phone-input


yarn add my-phone-input

```


import React, { useState } from "react";
import { MyPhone } from "my-phone-input";

export default function App() {
  const [phone, setPhone] = useState("");
  return <MyPhone value={phone} onChange={setPhone} />;
}



| Prop               | Tipo                      | Descripción                                             |
| ------------------ | ------------------------- | ------------------------------------------------------- |
| `value`            | `string`                  | Valor del teléfono (controlado)                         |
| `onChange`         | `(value: string) => void` | Función que se ejecuta al cambiar el teléfono           |
| `selectedCountry`  | `string`                  | Código ISO2 del país seleccionado                       |
| `onCountryChange`  | `(iso2: string) => void`  | Función que se ejecuta al cambiar el país               |
| `placeholder`      | `string`                  | Placeholder del input (default: `"Número de teléfono"`) |
| `disabled`         | `boolean`                 | Deshabilita el input y el selector                      |
| `className`        | `string`                  | Clase para el contenedor principal                      |
| `inputClassName`   | `string`                  | Clase para el input de teléfono                         |
| `countryClassName` | `string`                  | Clase para el selector de país                          |


# clases-personalizadas

<MyPhone
  className="mi-componente"
  inputClassName="mi-input"
  countryClassName="mi-pais"
/>

.mi-componente { font-size: 16px; }
.mi-input { border-color: green; padding: 12px; }
.mi-pais { background: #f0f0f0; }



# CSS Variables (opcional)
.my-phone {
  --border-color: #ccc;
  --background: white;
  --font-size: 14px;
}

.my-phone__selected {
  border-color: var(--border-color);
  background: var(--background);
  font-size: var(--font-size);
}


# Y en tu proyecto consumidor:

.mi-tema .my-phone {
  --border-color: #4ade80;
  --background: #000;
  --font-size: 16px;
}

# Ejemplo completo con control de estado

import React, { useState } from "react";
import { MyPhone } from "my-phone-input";

export default function Example() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("us");

  return (
    <MyPhone
      value={phone}
      onChange={setPhone}
      selectedCountry={country}
      onCountryChange={setCountry}
      placeholder="Tu teléfono"
      className="mi-componente"
      inputClassName="mi-input"
      countryClassName="mi-pais"
    />
  );
}