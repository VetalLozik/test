import React from 'react';
import { cards } from './data';

import { 
    CardsW, 
    PageW, 
    Title, 
    Card, 
    CardImage, 
    CardImageW, 
    CardData, 
    CardTitle, 
    CardDescription,
    OptionList,
    OptionListItem,
    Button
} from "./styled"

export const AddsValueSection = () => {
  return (
    <PageW>
        <Title>We make creative media that <span>adds value</span></Title>
        <CardsW>
            {cards.map((card) => (
                <Card>
                    <CardImageW>
                        {card.images.map((img) => (
                            <CardImage src={img} />
                        ))}
                    </CardImageW>
                    <CardData>
                        <CardTitle>
                            {card.title}
                        </CardTitle>
                        <OptionList>
                            {card.items?.map((item) => (
                                <OptionListItem>{item}</OptionListItem>
                            ))}
                        </OptionList>
                        <CardDescription>
                            {card.description}
                        </CardDescription>
                    </CardData>
                </Card>
            ))}
        </CardsW>
        <Button>Get STARTED</Button>
    </PageW>
  )
}