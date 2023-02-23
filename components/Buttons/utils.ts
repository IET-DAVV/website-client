function getClassBasedOnVariant(
  styles: any,
  variant: 'filled' | 'outlined' | 'text'
) {
  // Refer to the variant property in the BasicButtonProps interface
  const variantClass = {
    filled: styles.filled,
    outlined: styles.outlined,
    text: styles.text,
  };
  return variantClass[variant];
}

// eslint-disable-next-line
export { getClassBasedOnVariant };
