from django.db import models

# Create your models here.
class Music(models.Model):
  image    = models.ImageField(upload_to='music_image/')
  name     = models.CharField(max_length=200, blank=False)
  audio    = models.FileField(upload_to='musics/')
  duration = models.DecimalField(max_digits=3, decimal_places=2, blank=False)

  artist   = models.CharField(max_length=50, blank=False)

  def save(self, *args, **kwargs):
    return super().save(*args, **kwargs)