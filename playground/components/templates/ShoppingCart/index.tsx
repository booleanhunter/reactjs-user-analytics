import React, { useState } from 'react';
import './index.css';

import Header from '@components/elements/Header';
import Card from '@components/elements/Card';
import Button from '@components/elements/Button';

import withTracking, { UserInteractionResource } from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);

interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
}

const initialProducts: Product[] = [
    {
        id: 1,
        name: "Infinity Mug",
        description: "Holds more coffee than the Time Stone holds secrets. Snap your drowsiness away.",
        quantity: 0
    },
    {
        id: 2,
        name: "Bat-Signal Night Light",
        description: "Lights up your room. Sadly doesn't summon billionaires with abs.",
        quantity: 0
    },
    {
        id: 3,
        name: "Los Pollos Hermanos Apron",
        description: "Cook like Gus. Just... stick to fried chicken. No RVs involved.",
        quantity: 0
    },
    {
        id: 4,
        name: "World's Best Boss Mug",
        description: "Just like Michael Scott's. Perfect for asserting dominance in ironic fashion.",
        quantity: 0
    },
    {
        id: 5,
        name: "Pearson Hardman Legal Pad",
        description: "For jotting down genius moves — even if you didn't go to Harvard.",
        quantity: 0
    } 
];

export interface ShoppingCartProps {
    onEventLog: (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource,
    ) => void;
}

const ShoppingCart: React.FC = ({onEventLog}: ShoppingCartProps) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    const handleAdd = (id: number) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    const handleRemove = (id: number) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === id && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);

    return (
        <>
            <Header
                title={'Shopping Cart'}
                subTitle={
                    'A sample Shopping cart example page that captures user interaction.'
                }
                ></Header>
            <div className="split-layout">
                <div className="split-left">
                    <h2 className="split-title">Add products</h2>
                    {products.map(product => (
                        <Card key={product.id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="quantity-controls">
                                <ButtonWithTracking
                                    label="−"
                                    onClick={() => handleRemove(product.id)} 
                                    trackers={[
                                        {
                                            action: 'onClick',
                                            track: onEventLog,
                                            data: {
                                                event: 'PRODUCT_REMOVE',
                                                productId: product.id,
                                            },
                                        },
                                    ]}
                                />
                                <span className="quantity">{product.quantity}</span>
                                <ButtonWithTracking
                                    label="+" 
                                    onClick={() => handleAdd(product.id)}
                                    trackers={[
                                        {
                                            action: 'onClick',
                                            track: onEventLog,
                                            data: {
                                                event: 'PRODUCT_ADD',
                                                productId: product.id,
                                            },
                                        },
                                    ]}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="split-right">
                    <h2 className="split-title">Your Cart</h2>
                    
                    <p>Total items added: <strong>{totalItems}</strong></p>
                    <ButtonWithTracking
                        label="Proceed to Buy"
                        disabled={totalItems === 0}
                        trackers={[
                            {
                                action: 'onClick',
                                track: onEventLog,
                                data: {
                                    event: 'CHECKOUT',
                                    totalItems: totalItems,
                                },
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
