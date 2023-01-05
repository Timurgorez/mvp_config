import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Wrapper = styled.div`
  position: relative;
`;

const EditIconWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
  theme?: any;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const ConfigurableWrapper = ({
  propsList,
  Component,
}: {
  propsList: any[];
  Component: any;
}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [propsListState, setPropsListState] = React.useState(propsList)

  const editComponent = () => {
    console.log('test', !open);
    setOpen(!open);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Main open={open} theme={theme}>
      <Wrapper onClick={editComponent} >
          <Component 
            {...propsListState.reduce((acc, el) => ({...acc, [el.propName]: el.data}), {})}
          />
        </Wrapper>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <List>
          {propsListState.map(({ propName }, index) => (
            <ListItem key={propName} disablePadding>
              <ListItemButton>
                <ListItemText primary={propName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default ConfigurableWrapper;
