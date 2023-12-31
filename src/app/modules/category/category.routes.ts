import { Roles } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/create-category',
  auth(Roles.ADMIN, Roles.SUPER_ADMIN),
  CategoryController.insertIntoDB
);
router.get('/', CategoryController.getAllCategories);
router.patch(
  '/:id',
  auth(Roles.ADMIN, Roles.SUPER_ADMIN),
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  auth(Roles.ADMIN, Roles.SUPER_ADMIN),
  CategoryController.deleteCategory
);
router.get('/:id', CategoryController.getByIdFromDB);

export const CategoryRoutes = router;
