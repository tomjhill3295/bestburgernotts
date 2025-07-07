import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const burgerPlaces = [
  {
    name: "BOHNS Best Burgers",
    description: "The best burger place I know",
    address: "20-22 Broad St, Nottingham NG1 3AL",
    website: "https://www.bohnsbestburgers.co.uk/"
  },
  {
    name: "Secret Burger Club",
    description: "Underground-style pop-up with artisan burgers.",
    address: "Locations vary - follow on social media",
    website: "https://www.instagram.com/secretburgerclub/"
  },
  {
    name: "Mesa",
    description: "Modern eatery with the best classic American burger in the city ",
    address: "24-26 Goose Gate, Nottingham NG1 1FF",
    website: "https://www.mesanottingham.com/"
  },
  {
    name: "Handmade Burger Co",
    description: "Freshly made burgers with a huge variety of toppings.",
    address: "Old Market Square, Nottingham NG1 2BY",
    website: "https://handmadeburger.co.uk/"
  },
  {
    name: "Rub Smokehouse & Bar",
    description: "American BBQ and towering burger creations.",
    address: "2-4 Adams St, Nottingham NG1 1DX",
    website: "https://www.rubsmokehouse.com/"
  },
  {
    name: "The Keane's Head",
    description: "Cozy pub serving craft beer and Indian themed burgers in a relaxed setting.",
    address: "46 St Mary's Gate, Nottingham NG1 1QA",
    website: "https://www.castlerockbrewery.co.uk/pubs/keans-head/"
  },
  {
    name: "Red Dog Saloon",
    description: "US-style diner with bold, smoky burger options.",
    address: "20-22 Victoria St, Nottingham NG1 2EX",
    website: "https://reddogsaloon.co.uk/"
  },
  {
    name: "Fat Hippo",
    description: "Loaded burgers with unique toppings and sauces.",
    address: "9 Broad St, Nottingham NG1 3AJ",
    website: "https://fathippo.co.uk/"
  },
  {
    name: "Burg Burgers",
    description: "Indie burger joint with a loyal following.",
    address: "Mansfield Rd, Nottingham NG1",
    website: "https://www.instagram.com/burgburgers/"
  }
];

export default function BurgerTop10() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center\">Top 10 Burgers in Nottingham</h1>
      <p className="text-center text-gray-600 mb-6">Updated July 2025</p>
      {burgerPlaces.map((place, index) => {
        const encodedAddress = encodeURIComponent(place.address);
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

        return (
          <Card key={index} className="shadow-md">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{index + 1}. {place.name}</h2>
                <Badge>{place.address}</Badge>
              </div>
              <p className="mt-2 text-gray-700">{place.description}</p>
              <a
                href={place.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Visit Website
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline mt-1 block"
              >
                View on Map
              </a>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
