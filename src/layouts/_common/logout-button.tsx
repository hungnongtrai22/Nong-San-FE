// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
import { useSnackbar } from 'src/components/snackbar';
// auth
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------


type Props = {
  sx?: SxProps<Theme>;
};

export default function LogoutButton({ sx }: Props) {
  const {  logout } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const handleLogout = () => {
    enqueueSnackbar('Đăng xuất tài khoản thành công!');
    logout();
  };

  // const loginPath = loginPaths[method];

  return (
    <Button onClick={() => handleLogout()} variant="outlined" sx={{ mr: 1, ...sx }}>
      Đăng xuất
    </Button>
  );
}
