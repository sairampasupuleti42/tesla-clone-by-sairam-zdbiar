import React from 'react';
import styled from 'styled-components';
import Section from './Section';
export default function Home() {
  var data = [
    {
      id: 1,
      title: 'Model S',
      description: 'Order Online for Touchless Delivery',
      image: 'model-s.jpg',
      src: '1rMeRfE2OEktMOGVlgA1TwJKNj1teuLtG',
      leftButtonText: 'Custom Order',
      rightButtonText: 'Existing Inventory',
      range: '390',
      time: '1.99',
      topSpeed: '200',
      peakPower: '1,020',
    },

    {
      id: 2,
      title: 'Model 3',
      description: 'Order Online for Touchless Delivery',
      image: 'model-3.jpg',
      src: '1aja3SRTuZ1IwWmjZVh7XO4UXmpLWULPN',
      range: '400',
      time: '2.99',
      topSpeed: '180',
      peakPower: '900',
      leftButtonText: 'Custom Order',
      rightButtonText: 'Existing Inventory',
    },
    {
      id: 3,
      title: 'Model X',
      description: 'Order Online for Touchless Delivery',
      image: 'model-x.jpg',
      src: '1XT8XMmOYX7EsIFwkDm1jzChUA9GpV6Q5',
      range: '350',
      time: '1.55',
      topSpeed: '150',
      peakPower: '1,130',
      leftButtonText: 'Custom Order',
      rightButtonText: 'Existing Inventory',
    },
    {
      id: 4,
      title: 'Model Y',
      description: 'Order Online for Touchless Delivery',
      image: 'model-y.jpg',
      src: '15yOZas5vDbYs0xvx3gNLpH7HKkaFVjTi',
      range: '410',
      time: '2.05',
      topSpeed: '190',
      peakPower: '1,040',
      leftButtonText: 'Custom Order',
      rightButtonText: 'Existing Inventory',
    },
    {
      id: 5,
      title: 'Lowest Cost Solar Panels in America',
      description: 'Money-back guarantee',
      image: 'solar-panel.jpg',
      src: '15HHiamxCMosnDNA6B_36FzkO9VRAgw8Z',
      leftButtonText: 'Custom Order',
      rightButtonText: 'Learn more',
    },
    {
      id: 6,
      title: 'Solar for New Roofs',
      description: 'Solar Roof Costs Less Than a New Roof Plus Solar Panels',
      image: 'model-3.jpg',
      src: '13iroLgIJhbAJAQt6oNgzlL9jXPw69uyC',
      leftButtonText: 'Custom Order',
      rightButtonText: 'Learn more',
    },
    {
      id: 7,
      title: 'Accessories',
      description: '',
      image: 'model-3.jpg',
      src: '1dyUtQSxN2dmmJzWPXx5-BbP-lP30OlRI',
      leftButtonText: 'Shop Now',
    },
  ];

  return (
    <Container>
      {data &&
        data?.map((model, i) => (
          <Section
            key={i}
            id={model.id}
            title={model?.title}
            description={model?.description}
            imageSrc={model?.src}
            range={model?.range}
            time={model?.time}
            topSpeed={model?.topSpeed}
            peakPower={model?.peakPower}
            leftButtonText={model?.leftButtonText}
            rightButtonText={model?.rightButtonText}
          />
        ))}
    </Container>
  );
}
const Container = styled.div`
    height:100vh;
`;
