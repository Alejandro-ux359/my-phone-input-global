import "./style.css";
type MyPhoneProps = {
    value?: string;
    onChange?: (value: string) => void;
    selectedCountry?: string;
    onCountryChange?: (iso2: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    inputClassName?: string;
    countryClassName?: string;
};
export default function MyPhone({ value: controlledValue, onChange, selectedCountry, onCountryChange, placeholder, disabled, className, inputClassName, countryClassName, }: MyPhoneProps): import("react/jsx-runtime").JSX.Element;
export {};
