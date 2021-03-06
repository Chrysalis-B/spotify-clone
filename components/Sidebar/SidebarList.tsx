import { FC } from 'react';
import { List } from '@chakra-ui/layout';
import { SidebarItem, SidebarItemProps } from './SidebarItem';

interface SidebarListProps {
  list: SidebarItemProps[];
}

export const SidebarList: FC<SidebarListProps> = ({ list }) => {
  return (
    <List spacing={2}>
      {list.map(listItem => (
        <SidebarItem key={listItem.name} {...listItem} />
      ))}
    </List>
  );
};
