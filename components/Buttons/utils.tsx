export function getClassBasedOnVariant(
  styles: any,
  variant: 'primary' | 'secondary' | 'tertiary'
) {
  //Refer to the variant property in the BasicButtonProps interface
  switch (variant) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
    case 'tertiary':
      return styles.tertiary;
    default:
      return styles.primary;
  }
}
