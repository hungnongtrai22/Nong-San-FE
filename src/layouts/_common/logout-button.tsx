// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
import { paths } from 'src/routes/paths';
import { useSnackbar } from 'src/components/snackbar';
// auth
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

const loginPaths: Record<string, string> = {
  jwt: paths.auth.jwt.login,
  auth0: paths.auth.auth0.login,
  amplify: paths.auth.amplify.login,
  firebase: paths.auth.firebase.login,
};

type Props = {
  sx?: SxProps<Theme>;
};

export default function LogoutButton({ sx }: Props) {
  const { method, logout } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const handleLogout = () => {
    enqueueSnackbar('Đăng xuất tài khoản thành công!');
    logout();
  };

  const loginPath = loginPaths[method];

  return (
    <Button onClick={() => handleLogout()} variant="outlined" sx={{ mr: 1, ...sx }}>
      Đăng xuất
    </Button>
  );
}
