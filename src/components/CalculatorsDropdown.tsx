import { Dropdown, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import { ChevronDown } from 'lucide-react';
import './CalculatorsDropdown.css';

interface CalculatorsDropdownProps {
  base: string;
}

export default function CalculatorsDropdown({ base }: CalculatorsDropdownProps) {
  const items: MenuProps['items'] = [
    {
      key: 'nhr',
      label: <a href={`${base}calculators/nhr`}>NHR</a>,
    },
    {
      key: 'seguranca-social',
      label: <a href={`${base}calculators/seguranca-social`}>Segurança Social</a>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        hashed: false,
      }}
    >
      <Dropdown 
        menu={{ items }} 
        trigger={['click']}
        overlayClassName="calculators-dropdown-overlay"
      >
        <button className="dropdown-button">
          Calculators
          <ChevronDown size={12} className="dropdown-arrow" />
        </button>
      </Dropdown>
    </ConfigProvider>
  );
}
