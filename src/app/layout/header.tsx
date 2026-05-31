'use client';

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  variant?: 'dark' | 'light';
}

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Privacy Note', href: '/privacy-note' },
  { label: 'Console', href: 'https://msg.dennydepok.com/', external: true },
];

export const Header = ({ variant = 'dark' }: HeaderProps) => {
  const isDark = variant === 'dark';
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState('');
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? activePath === '/' : activePath === href;

  const baseNavStyle = {
    position: 'relative',
    minWidth: 120,
    color: '#73757A',
    cursor: 'pointer',
    px: 2,
    py: 1,
    borderRadius: '87px',
  };

  const darkActiveStyle = {
    backgroundColor: '#FFFFFF',
    color: '#2D3032',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)',
      width: 20,
      height: 3,
      backgroundColor: '#48A6A7',
      borderRadius: 41,
    },
  };

  const lightActiveStyle = {
    backgroundColor: '#171717',
    color: '#FFFFFF',
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {NAV_LINKS.map(({ label, href, external }) => (
          <Link
            key={href}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div
        className={`flex items-center w-full ${isDark ? 'md:lg:px-60' : 'px-6 md:lg:px-60'}`}
      >
        <IconButton
          size="medium"
          edge="end"
          color="inherit"
          aria-label="menu"
          className="block md:lg:hidden!"
          sx={{
            mr: 2,
            backgroundColor: 'ButtonHighlight',
            ':hover': { backgroundColor: 'ButtonHighlight' },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <div
          className={`flex items-center justify-between w-full p-3 rounded-full min-h-16 ${
            isDark ? 'bg-[#171717]' : ''
          }`}
        >
          <Image
            src={
              isDark
                ? '/images/company-logo.svg'
                : '/images/company-logo-black.svg'
            }
            alt="Connecta"
            width={138}
            height={32}
          />

          <div className="hidden md:lg:flex">
            <Box
              sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
            >
              {NAV_LINKS.map(({ label, href, external }) => (
                <Link
                  key={href}
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Typography
                    sx={{
                      ...baseNavStyle,
                      ...(isActive(href)
                        ? isDark
                          ? darkActiveStyle
                          : lightActiveStyle
                        : {}),
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </div>
        </div>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};
