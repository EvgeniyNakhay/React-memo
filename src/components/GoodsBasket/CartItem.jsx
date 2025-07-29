export default function CartItem({ listItem }) {
  return listItem.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
}
