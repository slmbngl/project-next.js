"use client"
import React, { useState } from 'react';
import { Collapse } from 'antd';
import { faqData } from './data';

const { Panel } = Collapse;

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = selectedCategory === 'All'
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  const items = filteredData.map(item => {
    const Icon = item.icon;
    return {
      key: item.id.toString(),
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {Icon && (
            <div style={{ backgroundColor: '#134E70', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', width: '40px', height: '40px' }}>
              <Icon style={{ fontSize: '24px', color: 'white' }} />
            </div>
          )}
          <h2>{item.category}</h2>
        </div>
      ),
      children: <p>{item.question}</p>,
    };
  });

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="max-w-3xl m-0 p-0 md:p-5 text-center ">
      <h1>FAQ</h1>
      <p>Welcome to our FAQ page! Here, you will find answers to the most commonly asked questions...</p>

      <div className="tabs flex flex-wrap md:flex-nowrap">
        {['All', 'Seafarer', 'Company', 'Cadet'].map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} expandIconPosition={'end'} />
    </div>
  );
};

export default App;
