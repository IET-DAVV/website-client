function getClassBasedOnVariant(
  styles: any,
  variant: 'primary' | 'secondary' | 'tertiary'
) {
  // Refer to the variant property in the BasicButtonProps interface
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };
  return variantClass[variant];
}

// eslint-disable-next-line
export { getClassBasedOnVariant };
