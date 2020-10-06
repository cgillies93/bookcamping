"""Add Campground Amenity Relationship

Revision ID: 2580ce5968aa
Revises: c130fdb90d34
Create Date: 2020-09-24 17:20:35.495862

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2580ce5968aa'
down_revision = 'c130fdb90d34'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('amenities',
    sa.Column('amenity_id', sa.Integer(), nullable=False),
    sa.Column('campground_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['amenity_id'], ['Amenity.id'], ),
    sa.ForeignKeyConstraint(['campground_id'], ['Campground.id'], ),
    sa.PrimaryKeyConstraint('amenity_id', 'campground_id')
    )
    op.add_column('Campground', sa.Column('featured', sa.Integer(), nullable=True))
    op.drop_constraint('Campground_amenity_id_fkey', 'Campground', type_='foreignkey')
    op.drop_column('Campground', 'amenity_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Campground', sa.Column('amenity_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('Campground_amenity_id_fkey', 'Campground', 'Amenity', ['amenity_id'], ['id'])
    op.drop_column('Campground', 'featured')
    op.drop_table('amenities')
    # ### end Alembic commands ###