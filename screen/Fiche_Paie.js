import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Fiche_Paye = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fiche de paie</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations générales</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Nom :</Text>
            <Text style={styles.infoValue}>Esperance YONKEU</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Matricule :</Text>
            <Text style={styles.infoValue}>123456789</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date de paie :</Text>
            <Text style={styles.infoValue}>15/01/2023</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Période :</Text>
            <Text style={styles.infoValue}>01/01/2023 - 15/01/2023</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rémunération</Text>
          <View style={styles.salaryItem}>
            <Text style={styles.salaryLabel}>Salaire brut :</Text>
            <Text style={styles.salaryValue}>400 000 FCFA</Text> 
          </View>
          <View style={styles.salaryItem}>
            <Text style={styles.salaryLabel}>Heures supplémentaires :</Text>
            <Text style={styles.salaryValue}>50 000 FCFA</Text>
          </View>
          <View style={styles.salaryItem}>
            <Text style={styles.salaryLabel}>Primes :</Text>
            <Text style={styles.salaryValue}>25 000 FCFA</Text> 
          </View>
          <View style={styles.salaryItem}>
            <Text style={styles.salaryLabel}>Total brut :</Text>
            <Text style={styles.salaryValue}>475 000 FCFA</Text> 
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>IMP</Text>
          <View style={styles.deductionItem}>
            <Text style={styles.deductionLabel}>Cotisation maladie :</Text>
            <Text style={styles.deductionValue}>30 000 FCFA</Text> 
          </View>
          <View style={styles.deductionItem}>
            <Text style={styles.deductionLabel}>Total retenues :</Text>
            <Text style={styles.deductionValue}>30 000 FCFA</Text> 
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Net à payer</Text>
          <View style={styles.netItem}>
            <Text style={styles.netLabel}>Salaire net :</Text>
            <Text style={styles.netValue}>445 000 FCFA</Text> 
          </View>
        </View>
      </View>
      <View style={{ marginBottom:30}}>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Télécharger</Text>
      </TouchableOpacity>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 15,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
  },
  salaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  salaryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  salaryValue: {
    fontSize: 16,
  },
  deductionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  deductionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deductionValue: {
    fontSize: 16,
  },
  netItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  netLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  netValue: {
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: '#0288d1',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  downloadButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Fiche_Paye;