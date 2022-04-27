interface Props {
  label: string;
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", label }: Props) {
  const baseClassname = "py-3 px-7 font-semibold transition duration-300 ease-out active:scale-95";
  let variantClassname;

  switch (variant) {
    case "primary":
      variantClassname = "rounded-full bg-white text-purple-700 shadow-md hover:shadow-2xl";
      break;
    case "secondary":
      variantClassname = "rounded-xl bg-gray-900 text-gray-100 shadow-md hover:shadow-2xl font-normal";
      break;
  }

  const className = `${baseClassname} ${variantClassname}`;

  return (
    <>
      <button className={className}>{label}</button>
    </>
  );
}
