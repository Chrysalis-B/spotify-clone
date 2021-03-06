import { FC } from 'react';
import { ListItem, LinkBox, LinkOverlay, ListIcon } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { IconType } from 'react-icons/lib';

export interface SidebarItemProps {
  icon?: IconType;
  name: string;
  route: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, name, route }) => {
  return (
    <ListItem>
      <LinkBox>
        <NextLink href={route} passHref>
          <LinkOverlay>
            {icon && <ListIcon as={icon} color="white" marginRight={3} />}
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};
