import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'process.env.HF_TOKEN': JSON.stringify(process.env.VITE_HF_TOKEN),
  },
});