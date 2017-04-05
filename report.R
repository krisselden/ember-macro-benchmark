#!/usr/bin/env Rscript
phases = read.csv('results/phases.csv')
samples = read.csv('results/samples.csv')
gc = read.csv('results/gc.csv')

experiment = phases[phases$set == 'experiment' & phases$phase == 'paint' & phases$type == 'cumulative',]$ms
control = phases[phases$set == 'control' & phases$phase == 'paint' & phases$type == 'cumulative',]$ms

result = wilcox.test(experiment, control, conf.int=TRUE)

samples$type = factor(samples$type, levels=c('compile','run','js','gc','duration'))

# by default string factors are ordered alphabetically
phases$phase = factor(phases$phase,
    levels=c('load','boot','transition','render','paint'),
    labels=c('Load','Boot','Transition','Render','Paint'))
phases$set = factor(phases$set,
  levels=c('control', 'experiment'),
  labels=c('Control', 'Experiment'))
library('ggplot2')

png(file='results/gc.png')
ggplot(aes(y = heap, x = type, color = set), data = gc) +
  geom_boxplot(outlier.size=0.5, outlier.shape=4) +
  scale_y_continuous(labels = function (x) { format(structure(x, class="object_size"),"Mb")})
dev.off()

png(file='results/samples.png')
ggplot(aes(y = ms, x = type, color = set), data = samples) +
  geom_boxplot(outlier.size=0.5, outlier.shape=4)
dev.off()

png(file='results/phases.png', width=1024, height=768)
ggplot(aes(y = ms, x = phase, color = set), data = phases) +
  facet_grid(type ~ ., scales='free_y') +
  geom_boxplot(outlier.size=0.5, outlier.shape=4) +
  labs(title = "control vs experiment", color = "Set",
    x = paste0("estimated shift: ", result$estimate, " confidence interval (0.95): ", result$conf.int[1], " ", result$conf.int[2], " p.value: ", result$p.value))
dev.off()
