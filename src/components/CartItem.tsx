import type { CartItem as CartItemType } from "../types/index";

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
}

function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div>
      <img src={item.product.image} alt={item.product.name} />
      <p>{item.product.name}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
