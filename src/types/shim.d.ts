import { type } from 'os';
import { AttributifyAttributes } from 'windicss/types/jsx'; // 增加类声明 防止类型报错

declare module 'react' {
  type HTMLAttributes<T> = AttributifyAttributes;
}
