import { cn } from "cn";

function FlexWrapper({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex container", className)} {...props}>
      {children}
    </div>
  );
}

export default FlexWrapper;
