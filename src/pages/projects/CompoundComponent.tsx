import { ReactNode } from 'react';
import Head from '../../components/Head';
import { toast } from '../../utils/toast';

export default function CompoundComponent() {
  return (
    <main className="p-6">
      <Head text="Compound Component" />
      <p className="para dot mb-4">
        In this demo we are making a shopping card
      </p>
      <section className="flex justify-center space-x-5">
        <Card>
          <Card.Image
            src="https://placehold.co/300x200?text=Product&font=montserrat"
            alt="Product"
            title="Product Image"
          />
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Description>
              This is a short description of the product you might want to buy.
              It looks good and works well!
            </Card.Description>
            <Card.Button onClick={() => toast('You just clicked the button')}>
              Add to Cart
            </Card.Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Image
            src="https://placehold.co/300x200?text=Product&font=montserrat"
            alt="Product"
            title="Product Image"
          />
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Description>
              This is a short description of the product you might want to buy.
              It looks good and works well!
            </Card.Description>
            <Card.Button onClick={() => toast('You just clicked the button')}>
              Add to Cart
            </Card.Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Image
            src="https://placehold.co/300x200?text=Product&font=montserrat"
            alt="Product"
            title="Product Image"
          />
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Description>
              This is a short description of the product you might want to buy.
              It looks good and works well!
            </Card.Description>
            <Card.Button onClick={() => toast('You just clicked the button')}>
              Add to Cart
            </Card.Button>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}

const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl">
      {children}
    </div>
  );
};

const Image = ({
  src,
  alt,
  title,
}: {
  src?: string;
  alt?: string;
  title?: string;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className="pointer-events-none h-48 w-full object-cover select-none"
    />
  );
};

const Body = ({ children }: { children?: ReactNode }) => {
  return <div className="space-y-4 p-4">{children}</div>;
};

const Title = ({ children }: { children?: ReactNode }) => {
  return <h2 className="text-xl font-semibold text-gray-900">{children}</h2>;
};

const Description = ({ children }: { children?: ReactNode }) => {
  return <p className="text-sm text-gray-600">{children}</p>;
};

const Button = ({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="mt-2 w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow transition-colors duration-200 hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Description = Description;
Card.Button = Button;
