import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { allCountries } from "country-telephone-data";
import "./style.css";
function isoToFlagEmoji(iso2) {
    return iso2
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}
export default function MyPhone({ value: controlledValue, onChange, selectedCountry, onCountryChange, placeholder = "Número de teléfono", disabled = false, className, inputClassName, countryClassName, }) {
    const [countries, setCountries] = useState([]);
    const [internalSelected, setInternalSelected] = useState(null);
    const [internalValue, setInternalValue] = useState("");
    useEffect(() => {
        const parsed = allCountries.map((c) => ({
            name: c.name,
            iso2: c.iso2,
            dialCode: c.dialCode,
        }));
        setCountries(parsed);
        setInternalSelected(parsed[0]);
    }, []);
    // País seleccionado: prop o interno
    const selected = countries.find((c) => c.iso2 === selectedCountry) ||
        internalSelected ||
        countries[0] ||
        null;
    // Valor del input: prop o interno
    const phoneValue = controlledValue !== undefined ? controlledValue : internalValue;
    const handleCountryChange = (iso2) => {
        if (onCountryChange) {
            onCountryChange(iso2);
        }
        else {
            const country = countries.find((c) => c.iso2 === iso2) || null;
            setInternalSelected(country);
        }
    };
    const handlePhoneChange = (val) => {
        const cleanVal = val.replace(/\D/g, "");
        if (onChange) {
            onChange(cleanVal);
        }
        else {
            setInternalValue(cleanVal);
        }
    };
    return (_jsxs("div", { className: `my-phone ${className ?? ""}`, children: [_jsxs("div", { className: "my-phone__country", children: [selected && (_jsxs("div", { className: `my-phone__selected ${countryClassName ?? ""}`, children: [_jsx("span", { className: "flag", children: isoToFlagEmoji(selected.iso2) }), _jsxs("span", { className: "code", children: ["+", selected.dialCode] }), _jsx("span", { className: "arrow", children: "\u25BE" })] })), _jsx("select", { className: "my-phone__select", value: selected?.iso2, onChange: (e) => handleCountryChange(e.target.value), disabled: disabled, children: countries.map((c) => (_jsxs("option", { value: c.iso2, children: [isoToFlagEmoji(c.iso2), " ", c.name, " +", c.dialCode] }, c.iso2))) })] }), _jsx("input", { type: "tel", className: inputClassName, value: phoneValue, onChange: (e) => handlePhoneChange(e.target.value), placeholder: placeholder, disabled: disabled })] }));
}
