import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const NourishingIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color || DEFAULT_COLOR}
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 121 131"
    >
      <path
        d="M89.2281 19.1106C88.7985 18.8669 88.4258 18.6069 88.0341 18.3523C87.1307 15.0319 85.2165 11.9877 82.2472 9.42021C75.399 3.4998 63.5536 0.11438 49.7308 0.11438C40.7472 0.11438 29.9695 5.1898 20.171 14.0244C11.497 21.8515 2.45659 34.0227 2.82933 44.9102C2.25443 46.7194 0.397073 53.5173 0.504472 65.136C0.573965 72.2319 10.1956 87.2035 15.0285 91.6398C16.1151 96.2331 19.2992 105.929 23.3677 110.501L24.2332 111.486C28.6555 116.573 40.3935 130.114 57.6783 130.114C74.9631 130.114 86.7074 116.578 91.1234 111.486L91.9825 110.501C95.5077 106.552 99.8542 97.3815 100.448 91.369C106.191 85.7031 109.886 78.981 112.824 73.5156C113.974 71.3869 115.029 69.4098 116.097 67.7252C126.742 50.9606 118.2 35.5069 89.2281 19.1106ZM15.515 83.0381C11.5223 77.4481 6.86624 69.0848 6.82834 65.0873C6.73357 55.229 8.13607 49.1623 8.74255 46.9902C13.5186 44.5635 32.2754 35.0627 37.1589 33.1073C51.8914 27.214 63.1808 23.4277 68.1338 22.7235C69.8585 22.4798 71.0209 21.0823 70.7366 19.609C70.4523 18.1302 68.8224 17.1173 67.104 17.3773C59.5798 18.4498 43.4385 24.6194 34.4866 28.1998C30.2728 29.8844 17.1765 36.4385 9.71545 40.2085C11.3454 33.2427 16.7911 24.939 24.7512 17.7565C33.242 10.1027 42.5793 5.53105 49.7308 5.53105C61.7025 5.53105 72.1834 8.4073 77.7617 13.2227C80.7499 15.801 82.2598 18.8831 82.3167 22.3769C82.3167 22.4798 82.3483 22.5773 82.3483 22.6802V22.691C82.3356 24.2131 82.1145 25.6431 81.8113 27.0406C81.7481 27.3277 81.6976 27.6256 81.6218 27.9073C81.2869 29.1694 80.8258 30.3773 80.2761 31.5419C80.1056 31.8994 79.916 32.246 79.7265 32.5981C79.139 33.6815 78.4946 34.7377 77.7365 35.7398C77.509 36.0431 77.25 36.3302 77.0036 36.6281C76.315 37.4731 75.5759 38.291 74.7799 39.0819C74.4956 39.369 74.2176 39.6615 73.9207 39.9431C72.9351 40.8694 71.8738 41.7577 70.7619 42.619C70.4397 42.8681 70.1175 43.1173 69.789 43.361C68.6013 44.2385 67.3757 45.0944 66.0869 45.9177C65.8658 46.0585 65.6384 46.194 65.4173 46.3348C62.5238 48.144 59.4472 49.834 56.2947 51.4427C56.1494 51.5131 56.0104 51.5944 55.8651 51.6648C54.1341 52.5477 52.4221 53.3819 50.7606 54.1998C50.5268 54.3135 50.2867 54.4327 50.0593 54.541C49.4591 54.8335 48.8969 55.1098 48.322 55.3969C46.8942 56.0956 45.5359 56.7727 44.462 57.3415C43.6975 57.634 25.6357 64.6106 19.1539 74.3823C17.1512 77.4048 16.0899 80.4381 15.515 83.0381ZM86.9664 107.207L86.0504 108.253C81.7797 113.171 71.7853 124.698 57.6783 124.698C43.5712 124.698 33.5768 113.176 29.3062 108.253L28.3901 107.207C25.3324 103.779 22.1989 95.074 21.1123 90.1285C21.1186 90.004 21.1186 89.836 21.1249 89.6844C21.1249 89.5869 21.1376 89.5544 21.1376 89.446C21.1818 87.2523 21.2955 82.1281 24.6565 77.0635C30.1085 68.841 46.8753 62.3627 47.387 62.1406C49.1875 61.209 51.1459 60.2556 53.1928 59.2535C54.6458 58.544 56.1557 57.8019 57.6846 57.0381C59.1882 57.7856 60.6601 58.5115 62.1005 59.2102C64.1664 60.2231 66.1501 61.1927 67.9759 62.1352C68.0833 62.1894 68.1907 62.2381 68.3107 62.2815L68.317 62.2869C68.4434 62.341 77.907 65.9973 84.9322 71.2894C87.276 73.0552 89.3418 74.9998 90.7064 77.0581C91.5466 78.3202 92.1847 79.5931 92.6648 80.8173C93.6314 83.271 93.9852 85.5515 94.1305 87.2848C94.2 88.1515 94.219 88.8827 94.2316 89.4298C94.2442 89.9227 94.2569 90.291 94.2695 90.3019C94.2695 94.294 90.3147 103.459 86.9664 107.207ZM110.556 65.1415C109.432 66.9181 108.307 68.9981 107.094 71.2515C105.041 75.0594 102.805 79.214 99.8668 83.1085C99.7847 82.7294 99.6647 82.3177 99.5573 81.9223C99.4878 81.6677 99.4372 81.4294 99.3614 81.1694C99.2035 80.6494 99.0077 80.1077 98.8055 79.566C98.736 79.371 98.6791 79.1869 98.6033 78.9865C98.0095 77.486 97.2261 75.926 96.1963 74.3715C95.4382 73.2285 94.5032 72.1235 93.4735 71.0619C93.4419 71.0294 93.4166 70.9915 93.3787 70.959C92.3616 69.919 91.2308 68.9277 90.0431 67.9852C89.9799 67.9365 89.923 67.8823 89.8598 67.8335C88.6721 66.8965 87.4276 66.0135 86.1578 65.1794C86.0946 65.136 86.0314 65.0927 85.9682 65.0548C84.6795 64.2152 83.3907 63.4352 82.1208 62.7148L82.0198 62.6552C80.7184 61.9185 79.4675 61.2577 78.2924 60.6673L78.2671 60.6565C77.0858 60.066 76.0055 59.5515 75.0515 59.1181C74.9947 59.091 74.9504 59.0694 74.8999 59.0477C74.0913 58.6794 73.39 58.376 72.8214 58.1377C72.0065 57.791 71.3558 57.5256 71.0651 57.4119C69.2457 56.4748 67.2746 55.5106 65.2214 54.5085C64.7729 54.2865 64.2927 54.0427 63.8379 53.8206C63.8568 53.8098 63.8758 53.799 63.8947 53.7881C66.8071 52.1848 69.6942 50.4406 72.4297 48.5231C72.5182 48.4581 72.6066 48.3985 72.6951 48.339C75.3042 46.4919 77.7428 44.4769 79.9097 42.2723C80.074 42.1044 80.2445 41.931 80.4025 41.7577C82.4304 39.6127 84.1804 37.289 85.5386 34.7485C85.6966 34.456 85.8356 34.1581 85.9809 33.8656C86.5116 32.7823 86.9727 31.661 87.3518 30.5019C87.4276 30.2798 87.5224 30.0631 87.5855 29.8356C87.9835 28.4923 88.2615 27.084 88.4321 25.6269C88.4447 25.4969 88.4953 25.3831 88.5079 25.2477C118.946 43.2744 116.349 56.0035 110.556 65.1415Z"
        fill="white"
      />
    </svg>
  );
};
